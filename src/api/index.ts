import { DataType } from '@/types';

export async function fetchUsers(config = {}): Promise<{ results: DataType[] }> {
  const data = await fetch(`https://randomuser.me/api?${new URLSearchParams(config)}`)

  return await data.json();
}
