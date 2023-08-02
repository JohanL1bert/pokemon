import { INameAndUrl } from 'app/store/storeGlobalInterfaces';

export interface IMachines {
  id: number;
  item: INameAndUrl;
  move: INameAndUrl;
  version_group: INameAndUrl;
}
