import {EnkaClient,DetailedGenshinUser} from 'enka-network-api'
const enka = new EnkaClient({ defaultLanguage: "en" });
async function getUserFromUUID(UUID : string){
    const user = await enka.fetchUser(UUID);
    return 
}
export {enka,getUserFromUUID}
