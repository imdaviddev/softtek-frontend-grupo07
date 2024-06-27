import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';

import { getCurrentUser } from '../services/usuarioService';

const TurnosCardsUser = () => {
  const userData = getCurrentUser();
  const [copiedMessage, setCopiedMessage] = useState('');

  const handleCopyData = () => {
    const { nombre, dni, numeroCelular, email } = userData;
    const dataToCopy = `Nombre: ${nombre}\nDNI: ${dni}\nNúmero celular: ${numeroCelular}\nEmail: ${email}`;
    navigator.clipboard.writeText(dataToCopy)
      .then(() => {
        setCopiedMessage('Datos copiados al portapapeles!');
      })
      .catch((err) => console.error('Error al copiar datos:', err));
  };

  return (
    <Card
      sx={{
        width: 320,
        height: 320,
        maxWidth: '100%',
        boxShadow: 'lg',
      }}
    >
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar src="https://mui.com/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }} />
        <Typography level="title-lg">{userData.nombre}</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
          DNI: {userData.dni}
        </Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
          Número celular: {userData.numeroCelular}
        </Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
          Email: {userData.email}
        </Typography>
      </CardContent>
      <CardOverflow sx={{ bgcolor: 'background.level1' }}>
        <CardActions buttonFlex="1">
          <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
            <Button onClick={handleCopyData}>Copiar mis datos</Button>
          </ButtonGroup>
        </CardActions>
        {copiedMessage && (
          <Typography sx={{ textAlign: 'center', color: 'green' }}>
            {copiedMessage}
          </Typography>
        )}
      </CardOverflow>
    </Card>
  );
};

export default TurnosCardsUser;
