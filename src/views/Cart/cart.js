import React, { useState, useEffect } from 'react';
import {
  Breadcrumbs, Button, Card, CardActions, CardContent, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import ClearIcon from '@mui/icons-material/Clear';
import './style.sass';
import { getAllCartByUserId, deleteCartById, updateCartItem } from 'services/cart';

function Title() {
  return (
    <div className="title">
      <span>Shopping cart</span>
    </div>
  );
}

function MyCart() {
  const [dataCart, setDataCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const getAllData = async () => {
    try {
      await getAllCartByUserId().then((res) => {
        if (res?.status === 200) setDataCart(res?.data?.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickIncrease = async (id, data) => {
    try {
      await updateCartItem(id, {
        quantity: data.quantity + 1,
        total: (data.quantity + 1) * data.price,
      }).then((res) => {
        if (res.status === 200) {
          getAllData();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickDecrease = async (id, data) => {
    try {
      await updateCartItem(id, {
        quantity: data.quantity - 1,
        total: (data.quantity - 1) * data.price,
      }).then((res) => {
        if (res.status === 200) {
          getAllData();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelCartItem = async (id) => {
    try {
      await deleteCartById(id).then((res) => {
        if (res.status === 200) {
          // eslint-disable-next-line
          alert(res?.data?.status)
          getAllData();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getSubTotal = () => {
    if (dataCart) {
      const total = dataCart.reduce((acc, obj) => acc + obj.total, 0);
      setSubtotal(total);
    }
  };

  useEffect(() => {
    getSubTotal();
  }, [dataCart]);

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="shopping-cart">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Shopping cart</Typography>
      </Breadcrumbs>
      <Title />
      <TableContainer component={Paper}>
        {dataCart.length > 0 ? (
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 600 }}>Product</TableCell>
                <TableCell style={{ fontWeight: 600 }} align="right">Price</TableCell>
                <TableCell style={{ fontWeight: 600 }} align="right">Quantity</TableCell>
                <TableCell style={{ fontWeight: 600 }} align="right">Total price</TableCell>
                <TableCell style={{ fontWeight: 600 }} align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataCart.map((data) => (
                <TableRow
                  key={data?.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data?.product_name}
                  </TableCell>
                  <TableCell align="right">{data?.price}</TableCell>
                  <TableCell align="right">
                    <div className="detailInfo_quantity">
                      <div className="detailInfo_quantity-direct">
                        <buton className="detailInfo_quantity-button" onClick={() => handleClickDecrease(data?.id, data)}><IndeterminateCheckBoxIcon /></buton>
                        <input className="detailInfo_quantity-input" value={data?.quantity} />
                        <buton className="detailInfo_quantity-button" onClick={() => handleClickIncrease(data?.id, data)}><AddBoxIcon /></buton>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right">{data?.total}</TableCell>
                  <TableCell
                    align="right"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleDelCartItem(data?.id)}
                  >
                    <ClearIcon />

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (<Typography color="text.primary">Empty Cart</Typography>)}
      </TableContainer>
      <div className="card-total">
        <Card className="cards" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} style={{ fontWeight: 700 }} color="text.secondary" gutterBottom>
              {`SubTotal: $${subtotal}`}
            </Typography>
          </CardContent>
          <CardActions className="btn-checkout">
            <Button variant="contained">Proceed to checkout</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default MyCart;
