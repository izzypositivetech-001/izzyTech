



export type GeoLocation = {
    city: string | null;
    region: string | null;
    longitude: number;
    latitude: number;
    timezone: string | null;
    
}

const FALLBACK = {
    city: "lagos",
    region: "NG",
    longitude: 3.4021,
    latitude: 6.5244,
    timezone: "Africa/Lagos"
}


export async function getGeoLocation(): Promise<GeoLocation> {
     try{
        
        const response = await fetch("https://ipapi.co/json/")
        if(response.ok){
            const data = (await response.json());

             if( typeof data.latitude === "number" && typeof data.longitude === "number"){
                return {
                    city: (data.city ?? FALLBACK.city).toLowerCase(),
                    region: (data.country ?? FALLBACK.region).toLowerCase(),
                    longitude: data.longitude ?? FALLBACK.longitude,
                    latitude: data.latitude ?? FALLBACK.latitude,
                    timezone: data.timezone ?? FALLBACK.timezone
                }
             }
        }
     }catch{
        
     }

     return FALLBACK;
}