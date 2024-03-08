import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCities } from "../api/useCities";
import { formatCityLocation, formatCityName } from "../utils";
import { SelectedCity } from "../types";

export const CitySelect = () => {
  const [open, setOpen] = React.useState(false);
  const [city, setCity] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState<SelectedCity>();
  const { data, isFetching, isError } = useCities({ city });

  const enabled = !!city;

  const urlParams = new URLSearchParams({
    lat: `${selectedCity?.lat}`,
    lon: `${selectedCity?.lon}`,
    name: `${selectedCity?.name}`,
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
          value={urlParams.toString()}
        >
          {selectedCity ? selectedCity.name : "Select city"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
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
                        setSelectedCity({
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
