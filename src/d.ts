interface serverFilters {
  appid: string;
  nor?: string[];
  and?: string[];
  dedicated?: number;
  secure?: number;
  gamedir?: string;
  map?: string;
  linux?: number;
  password?: number;
  empty?: number;
  full?: number;
  proxy?: number;
  region?: string;
  napp?: string;
  noplayers?: number;
  white?: number;
  gametype?: string[];
  ngametype?: string[];
  gamedata?: string[];
  gamedataor?: string[];
  name_match?: string;
  version_match?: string;
  collapse_addr_hash?: number;
  gameaddr?: string;
}
