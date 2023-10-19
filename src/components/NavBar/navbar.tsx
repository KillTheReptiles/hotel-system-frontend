import {
  Avatar,
  Button,
  Card,
  Input,
  Typography,
} from '@material-tailwind/react';
import React from 'react';

export function NavBar() {
  const [search, setSearch] = React.useState('');
  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(target.value);
  return (
    <Card className="rounded-none shadow p-4  flex flex-col gap-4">
      <div className="flex items-center gap-8">
        <div className="relative flex items-center grow">
          <i className="fa-solid fa-search fa-xl mr-2"></i>
          <Input
            label="Enter your search"
            value={search}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: 'min-w-0',
            }}
            crossOrigin={undefined}
          />
          <Button
            size="sm"
            color={search ? 'gray' : 'blue-gray'}
            disabled={!search}
            className="!absolute right-1 top-1 rounded"
          >
            search
          </Button>
        </div>
        <div className="flex grow gap-2 place-content-end">
          <Avatar
            size="sm"
            variant="circular"
            className=" -translate-x-0.5"
            alt="user"
            src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
          />

          <>
            <div className="flex flex-col gap-1">
              <Typography
                variant="paragraph"
                color="black"
                className="font-bold capitalize leading-none"
              >
                Hotel de pruebas
              </Typography>
              <Typography
                variant="paragraph"
                color="black"
                className="capitalize leading-none"
              >
                Brayan Daza - Gerente
              </Typography>
            </div>
          </>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Typography
          variant="paragraph"
          color="black"
          className="capitalize leading-none"
        >
          19 de octubre, 2023
        </Typography>
      </div>
    </Card>
  );
}
