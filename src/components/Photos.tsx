import Image from "next/image";
import type { CollagePhoto } from "@/mocks/PeoplePhotoMock";

type PhotoCollageProps = {
  columns: CollagePhoto[][];
};

const columnOffsets = ["translate-y-[8.5%]", "translate-y-[2.8%]", "", ""];

export function PhotoCollage({ columns }: PhotoCollageProps) {
  return (
    <div className="relative mx-auto w-full max-w-113.75 md:ml-auto md:mr-0">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 aspect-square w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender"
      />

      <div className="relative grid grid-cols-[120fr_90fr_90fr_113fr] items-center gap-x-3.5">
        {columns.map((column, index) => (
          <div key={index} className={`flex flex-col gap-3 ${columnOffsets[index] ?? ""}`}>
            {column.map((photo) => (
              <div key={photo.src} className={`relative overflow-hidden rounded-md ${photo.ratio} ${photo.size ?? ""}`}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 120px, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
