import './style.css';
import { UsersTable } from '@/entities/users-table';

export function MainPage() {
  return (
    <>
      <div >
        <h1>Users table</h1>
      </div>
      <UsersTable/>
    </>
  );
}
