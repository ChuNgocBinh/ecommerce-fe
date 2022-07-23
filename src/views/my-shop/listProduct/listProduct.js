import React, { useEffect, useState } from "react";
import "./listProduct.sass";
// eslint-disable-next-line object-curly-newline
import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { deleteProduct, getListMyProducts } from "services/product";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { NotificationManager } from "react-notifications";
import { discount } from "constant/constant";

function ListMyProduct() {
  const [products, setProducts] = useState([]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });

  const fetchListMyProducts = async () => {
    try {
      const result = await getListMyProducts();
      console.log(result);
      if (result.status === 200 && result?.data?.status === "success") {
        setProducts(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const res = await deleteProduct(id);
      if (res?.status === 200 && res?.data?.status === "success") {
        const newProducts = products.filter((item) => item.id !== id);
        setProducts(newProducts);
        NotificationManager.success(
          "Create success",
          <FormattedMessage id="notification.success" />
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      NotificationManager.error(
        "Create error",
        <FormattedMessage id="notification.error" />
      );
    }
  };

  useEffect(() => {
    fetchListMyProducts();
  }, []);
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
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {product.id}
            </TableCell>
            <TableCell>{product.product_name}</TableCell>
            <TableCell>{formatter.format(product.cost)}</TableCell>
            <TableCell>
              {`${
                discount.find((item) => item.value === product.discount).label
              } %`}
            </TableCell>
            <TableCell>
              <div className="listMyProduct_actions">
                <span>
                  <VisibilityIcon color="primary" />
                </span>
                <span>
                  <BorderColorIcon color="secondary" />
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
    </div>
  );
}

export default ListMyProduct;
