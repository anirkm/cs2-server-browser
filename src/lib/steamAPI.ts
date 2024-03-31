import SteamAPI, { GameServer } from "steamapi";

const steam = new SteamAPI(process.env.SI_JE_PERDS_MES_SKINS_JE_ME_SUICIDE!);

function transformServerFiltersToURLString(filters: serverFilters): string {
  let urlString = "";

  if (filters.appid) {
    urlString += `\\appid\\${filters.appid}`;
  }

  if (filters.nor && filters.nor.length > 0) {
    urlString += `\\nor\\${filters.nor.join(",")}`;
  }

  if (filters.and && filters.and.length > 0) {
    urlString += `\\and\\${filters.and.join(",")}`;
  }

  if (filters.dedicated) {
    urlString += `\\dedicated\\${filters.dedicated}`;
  }

  if (filters.secure) {
    urlString += `\\secure\\${filters.secure}`;
  }

  if (filters.gamedir) {
    urlString += `\\gamedir\\${filters.gamedir}`;
  }

  if (filters.map) {
    urlString += `\\map\\${filters.map}`;
  }

  if (filters.linux) {
    urlString += `\\linux\\${filters.linux}`;
  }

  if (filters.password) {
    urlString += `\\password\\${filters.password}`;
  }

  if (filters.empty) {
    urlString += `\\empty\\${filters.empty}`;
  }

  if (filters.full) {
    urlString += `\\full\\${filters.full}`;
  }

  if (filters.proxy) {
    urlString += `\\proxy\\${filters.proxy}`;
  }

  if (filters.napp) {
    urlString += `\\napp\\${filters.napp}`;
  }

  if (filters.noplayers) {
    urlString += `\\noplayers\\${filters.noplayers}`;
  }

  if (filters.white) {
    urlString += `\\white\\${filters.white}`;
  }

  if (filters.gametype && filters.gametype.length > 0) {
    urlString += `\\gametype\\${filters.gametype.join(",")}`;
  }

  if (filters.gamedata && filters.gamedata.length > 0) {
    urlString += `\\gamedata\\${filters.gamedata.join(",")}`;
  }

  if (filters.gamedataor && filters.gamedataor.length > 0) {
    urlString += `\\gamedataor\\${filters.gamedataor.join(",")}`;
  }

  if (filters.name_match) {
    urlString += `\\name_match\\${filters.name_match}`;
  }

  if (filters.version_match) {
    urlString += `\\version_match\\${filters.version_match}`;
  }

  if (filters.collapse_addr_hash) {
    urlString += `\\collapse_addr_hash\\${filters.collapse_addr_hash}`;
  }

  if (filters.gameaddr) {
    urlString += `\\gameaddr\\${filters.gameaddr}`;
  }

  if (filters.ngametype && filters.ngametype.length > 0) {
    urlString += `\\ngametype\\${filters.ngametype.join(",")}`;
  }

  if (filters.region) {
    urlString += `\\region\\${filters.region}`;
  }

  return urlString;
}

const getServers = async (
  filters: serverFilters,
  limit: number = 50000
): Promise<GameServer[]> => {
  const filterString = transformServerFiltersToURLString(filters);
  console.log(filterString);
  return await steam.getServerList(filterString, limit);
};

export { getServers };

export default steam;
