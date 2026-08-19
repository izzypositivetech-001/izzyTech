import { GeoLocation } from "./location";




const TEMP_UNIT: "celsius" | "fahrenheit" = "celsius";

export type weather = {temperature: number, code: number}


export async function getWeather(location: GeoLocation): Promise<weather | null >{

    const url = new URL(`https://api.open-meteo.com/v1/forecast?`);


    url.searchParams.set("latitude", location.latitude.toFixed(2))
    url.searchParams.set("longitude", location.longitude.toFixed(2))
    url.searchParams.set("current", "temperature_2m,weather_code")
    url.searchParams.set("temperature_unit", TEMP_UNIT)
    url.searchParams.set("timezone", location.timezone ?? "Africa/Lagos")

    try{
        
        const response = await fetch(url, {
            next: {
                revalidate:60*60*6 //6hrs
            }
        })
        
        if(!response.ok) return null;

        const data = (await response.json())
        
        const temperature = data.current?.temperature_2m;
        const code = data.current?.weather_code;

        if(typeof temperature !== "number" || typeof code!== "number") return null;
            return {temperature, code}
        
}catch(e){
    
    return null;
}

}