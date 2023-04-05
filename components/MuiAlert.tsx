import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import {Stack,AlertTitle,Button} from '@mui/material';

export default function MuiAlert() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
      <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  This is an error alert — <strong>check it out!</strong>
</Alert>
<Alert severity="warning">
  <AlertTitle>Warning</AlertTitle>
  This is a warning alert — <strong>check it out!</strong>
</Alert>
<Alert severity="info">
  <AlertTitle>Info</AlertTitle>
  This is an info alert — <strong>check it out!</strong>
</Alert>
<Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  This is a success alert — <strong>check it out!</strong>
</Alert>
<Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
<Alert
  action={
    <Button color="inherit" size="small">
      UNDO
    </Button>
  }
>
  This is a success alert — check it out!
</Alert>
<Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
  This is a success alert — check it out!
</Alert>
<Alert
  iconMapping={{
    success: <CheckCircleOutlineIcon fontSize="inherit" />,
  }}
>
  This is a success alert — check it out!
</Alert>
<Alert icon={false} severity="success">
  This is a success alert — check it out!
</Alert>
<Alert variant="outlined" severity="error">
  This is an error alert — check it out!
</Alert>
<Alert variant="outlined" severity="warning">
  This is a warning alert — check it out!
</Alert>
<Alert variant="outlined" severity="info">
  This is an info alert — check it out!
</Alert>
<Alert variant="outlined" severity="success">
  This is a success alert — check it out!
</Alert>
<Alert variant="filled" severity="error">
  This is an error alert — check it out!
</Alert>
<Alert variant="filled" severity="warning">
  This is a warning alert — check it out!
</Alert>
<Alert variant="filled" severity="info">
  This is an info alert — check it out!
</Alert>
<Alert variant="filled" severity="success">
  This is a success alert — check it out!
</Alert>
<Alert severity="success" color="info">
  This is a success alert — check it out!
</Alert>
    </Stack>
  );
}