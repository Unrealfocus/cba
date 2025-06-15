
import { cls } from './nav.module'
import Focus from "remixicon-react/Focus3FillIcon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";
import { MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
const LocationInfo = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div>
            <div className={cls.sheetLocationInfo}>
              <MapPinIcon color="#000000" size={16} />
              <p className='text-sm-semibold '>Ring Road</p>
              <ArrowDropDownLineIcon size={16} />
            </div>
            <p className={cls.sheetLocationLabel}>Lagos, Nigeria</p>
          </div>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Search for your location</SheetTitle>

          </SheetHeader>
          <SheetDescription >
            <div className='flex flex-col gap-[10px]'>
              <div className={cls.sheetInputContainer}>
                <input
                  type="text"
                  className={cls.input}
                  placeholder="Search Merchants"
                />
                <div className="flex items-center ps-3 pointer-events-none">
                  <Button className="border-none flex text-base-semibold text-black" variant="outline">
                    <Focus color='black'/>
                    Locate Me
                  </Button>
                </div>
              </div>
              <div className="text-center text-black">-OR-</div>
              <Button variant="outline" className="flex w-full text-base-semibold text-black">
                <MapPinIcon color="#000000" size={16} />
                SET LOCATION ON MAP
              </Button>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default LocationInfo