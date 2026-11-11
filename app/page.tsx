import { Hero } from "@/components/hero"
import { Strip } from "@/components/strip";
import { SelectedWork } from "@/components/widgets/selected-work";
import { getGeoLocation } from "@/lib/location";
import { getWeather } from "@/lib/weather";





export default async function HomePage() {
  const location = await getGeoLocation();
  const weather = await getWeather(location);
    
  
  return (
    <main className="relative">
       <Hero location={location} weather={weather} />
       <Strip />
   <SelectedWork />    
    </main>
  )
}
