import React, { useEffect, useState } from 'react';
import './listProductAccept.sass';
// eslint-disable-next-line object-curly-newline
import { Table, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import {
  deleteProduct, getListMyProductAccept, updateProudct,
} from 'services/product';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { NotificationManager } from 'react-notifications';
import { discount } from 'constant/constant';
import Modal from 'components/modal/modal';

function ListMyProductAccept() {
  const [products, setProducts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [detail, setDetail] = useState(true);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
  });

  const fetchListMyProducts = async () => {
    try {
      const result = await getListMyProductAccept();
      console.log(result);
      if (result.status === 200 && result?.data?.status === 'success') {
        setProducts(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const res = await deleteProduct(id);
      if (res?.status === 200 && res?.data?.status === 'success') {
        const newProducts = products.filter((item) => item.id !== id);
        setProducts(newProducts);
        NotificationManager.success(
          'Create success',
          <FormattedMessage id="notification.success" />,
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      NotificationManager.error(
        'Create error',
        <FormattedMessage id="notification.error" />,
      );
    }
  };

  useEffect(() => {
    fetchListMyProducts();
  }, [openDialog]);

  const handleClickDetail = (product) => {
    setOpenDialog(true);
    setDetail(true);
    setCurrentProduct(product);
  };
  console.log(currentProduct);
  const handleConfirm = async () => {
    if (detail) {
      setOpenDialog(false);
    } else {
      delete currentProduct.shop_name;
      const isUpdate = await updateProudct(currentProduct, currentProduct.id);
      if (isUpdate.status === 200 && isUpdate?.data?.status === 'success') {
        NotificationManager.success(
          'update success',
          <FormattedMessage id="notification.success" />,
        );
      } else {
        NotificationManager.error(
          'update error',
          <FormattedMessage id="notification.error" />,
        );
      }
      setOpenDialog(false);
    }
  };

  const handleClickEdit = (product) => {
    setOpenDialog(true);
    setCurrentProduct(product);
    setDetail(false);
  };

  return (
    <div className="listMyProduct_container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>
              <FormattedMessage id="myshop.list.table.name" />
            </TableCell>
            <TableCell>
              <FormattedMessage id="myshop.list.table.cost" />
            </TableCell>
            <TableCell>
              <FormattedMessage id="myshop.list.table.discount" />
            </TableCell>
            <TableCell>
              <FormattedMessage id="myshop.list.table.action" />
            </TableCell>
          </TableRow>
        </TableHead>
        {products.map((product) => (
          <TableRow
            key={product.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {product.id}
            </TableCell>
            <TableCell>{product.product_name}</TableCell>
            <TableCell>{formatter.format(product.cost)}</TableCell>
            <TableCell>
              {`${discount.find((item) => item.value === product.discount).label
                // eslint-disable-next-line indent
                } %`}
            </TableCell>
            <TableCell>
              <div className="listMyProduct_actions">
                <span
                  aria-hidden="true"
                  onClick={() => handleClickDetail(product)}
                >
                  <VisibilityIcon color="primary" />
                </span>
                <span>
                  <BorderColorIcon
                    color="secondary"
                    aria-hidden="true"
                    onClick={() => handleClickEdit(product)}
                  />
                </span>
                <span
                  onClick={() => handleDeleteProduct(product.id)}
                  aria-hidden="true"
                >
                  <DeleteForeverIcon color="error" />
                </span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </Table>
      <Modal
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        handleConfirm={handleConfirm}
        title={detail ? 'Product detail' : 'Edit product'}
      >
        <div className="listproduct_dialog-container">
          <img src={currentProduct.picture_url} alt="anh" className="listproduct_img-dialog" />
          <div>
            <TextField
              defaultValue={currentProduct.product_name}
              size="small"
              InputProps={{
                readOnly: detail,
              }}
              fullWidth
              label="Product Name"
              margin="normal"
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  product_name: e.target.value,
                });
              }}
            />
            <TextField
              defaultValue={currentProduct.brand}
              size="small"
              InputProps={{
                readOnly: detail,
              }}
              fullWidth
              label="brand"
              margin="normal"
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  brand: e.target.value,
                });
              }}
            />
            <TextField
              defaultValue={currentProduct.cost}
              size="small"
              InputProps={{
                readOnly: detail,
              }}
              fullWidth
              label="cost"
              margin="normal"
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  cost: e.target.value,
                });
              }}
            />
            <TextField
              defaultValue={currentProduct.discount}
              size="small"
              InputProps={{
                readOnly: detail,
              }}
              fullWidth
              label="Discount"
              margin="normal"
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  discount: e.target.value,
                });
              }}
            />
            <TextField
              defaultValue={currentProduct.quantity}
              size="small"
              InputProps={{
                readOnly: detail,
              }}
              fullWidth
              label="Quantity"
              margin="normal"
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  quantity: e.target.value,
                });
              }}
            />
            <TextField
              defaultValue={currentProduct.description}
              size="small"
              multiline
              InputProps={{
                readOnly: detail,
              }}
              fullWidth
              label="Description"
              margin="normal"
              rows={4}
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  description: e.target.value,
                });
              }}
            />
            <TextField
              defaultValue={currentProduct.detail}
              size="small"
              multiline
              InputProps={{
                readOnly: detail,
              }}
              fullWidth
              label="Detail product"
              margin="normal"
              rows={4}
              onChange={(e) => {
                setCurrentProduct({
                  ...currentProduct,
                  detail: e.target.value,
                });
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ListMyProductAccept;
