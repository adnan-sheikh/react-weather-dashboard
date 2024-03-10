import * as React from "react";
import { cn } from "@/lib/utils";
import { formatCityLocation, formatCityName } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from "@/components/ui/command";
import { FormControl } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ControllerRenderProps, UseFormSetValue } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";

import { useCities } from "../api";

import { SelectedCity, LocationFormData } from "../types";

type Props = {
  field: ControllerRenderProps<LocationFormData, "city">;
  setValue: UseFormSetValue<LocationFormData>;
};
export const CitySelect = ({ field, setValue }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [city, setCity] = React.useState("");
  const [selectedCity] = React.useState<SelectedCity>();
  const { data, isFetching, isError } = useCities({ city });

  const enabled = !!city;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between",
              !field.value && "text-muted-foreground"
            )}
          >
            {field.value?.name ? field.value.name : "Select city"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command shouldFilter={false}>
          <CommandInput
            value={city}
            onValueChange={setCity}
            placeholder="Search city..."
          />
          {enabled && (
            <CommandList>
              {isFetching ? (
                <CommandLoading>Searching...</CommandLoading>
              ) : isError ? (
                <div className="p-4 text-sm">Something went wrong</div>
              ) : !data?.length ? (
                <CommandEmpty>No city found</CommandEmpty>
              ) : (
                data?.map(({ lat, lon, name, state, country }) => {
                  return (
                    <CommandItem
                      key={formatCityLocation({ lat, lon })}
                      onSelect={() => {
                        setValue("city", {
                          lat,
                          lon,
                          name: formatCityName({ city: name, state, country }),
                        });
                        setOpen(false);
                      }}
                      value={formatCityLocation({ lat, lon })}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedCity?.lat === lat && selectedCity?.lon === lon
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {formatCityName({ city: name, state, country })}
                    </CommandItem>
                  );
                })
              )}
            </CommandList>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
};
