import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function EditCar(props) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({brand: '', model: '', color: '', fuel: '', year: '', price: ''});

    const handleClickOpen = () => {
        setCar({
            brand: props.car.data.brand,
            model: props.car.data.model,
            color: props.car.data.color,
            fuel: props.car.data.fuel,
            year: props.car.data.year,
            price: props.car.data.price
        })
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        props.editCar(props.car.value, car);
        handleClose();
    }

    const inputChanged = e => {
        setCar({...car, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <Button size="small" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Car</DialogTitle>
                <DialogContent>
                    <TextField 
                        margin="dense" 
                        name="brand" 
                        value={car.brand} 
                        onChange={inputChanged} 
                        label="Brand" 
                        fullWidth 
                        variant="standard" />
                    <TextField
                        margin="dense"
                        name="model"
                        value={car.model}
                        onChange={inputChanged}
                        label="Model"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="color"
                        value={car.color}
                        onChange={inputChanged}
                        label="Color"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="year"
                        value={car.year}
                        onChange={inputChanged}
                        label="Year"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="Fuel"
                        value={car.fuel}
                        onChange={inputChanged}
                        label="Fuel"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        name="price"
                        value={car.price}
                        onChange={inputChanged}
                        label="Price"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditCar;