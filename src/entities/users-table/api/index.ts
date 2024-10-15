import { IUserData } from '@/shared/interfaces';

export async function fetchUsers(config = {}): Promise<{ results: IUserData[] }> {
  const data = await fetch(`https://randomuser.me/api?${new URLSearchParams(config)}`)

  return await data.json();
}
