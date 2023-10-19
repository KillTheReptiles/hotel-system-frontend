import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react';

export default function SideNav() {
  return (
    <Card className="h-screen w-full max-w-[20rem] p-4 shadow rounded-none">
      <div className="mb-2 flex items-center gap-4 p-4">
        <i className="fa-solid fa-hotel fa-xl"></i>
        <Typography variant="h5" color="blue-gray">
          Hotel de pruebas
        </Typography>
      </div>

      <div className="h-full">
        <List>
          {/* <hr className="my-2 border-blue-gray-50" /> */}
          <ListItem>
            <ListItemPrefix className='w-4'>
              <i className="fa-solid fa-house"></i>
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix className='w-4'>
              <i className="fa-solid fa-bed"></i>
            </ListItemPrefix>
            Rooms
          </ListItem>
          <ListItem>
            <ListItemPrefix className='w-4'>
              <i className="fa-solid fa-clipboard-check"></i>
            </ListItemPrefix>
            Bookings
          </ListItem>
          <ListItem>
            <ListItemPrefix className='w-4'>
              <i className="fa-solid fa-percent"></i>
            </ListItemPrefix>
            Rates
          </ListItem>
          <ListItem>
            <ListItemPrefix className='w-4'>
              <i className="fa-solid fa-list-check"></i>
            </ListItemPrefix>
            Tasks
          </ListItem>
          <ListItem>
            <ListItemPrefix className='w-4'>
              <i className="fa-solid fa-users"></i>
            </ListItemPrefix>
            Employees
          </ListItem>
          <ListItem>
            <ListItemPrefix className='w-4'>
              <i className="fa-solid fa-chart-simple"></i>
            </ListItemPrefix>
            Report
          </ListItem>
        </List>
      </div>
      <div>
        <List>
          <ListItem>
            <ListItemPrefix className='w-4'>
              <i className="fa-solid fa-gear"></i>
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix className='w-4'>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </div>
    </Card>
  );
}
