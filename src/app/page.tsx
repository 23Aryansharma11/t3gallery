import { data } from "~/mockData/data";

const mockImages = data.map((url, index)=>({
    id: index + 1,
    url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages, ...mockImages, ...mockImages,...mockImages].map((image)=>(
            <div key={image.id} className="w-48 h-28 overflow-hidden">
              <img
                src={image.url}
                alt="image"
            />
            </div>
          ))
        }
      </div>
    </main>
  );
}
