import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import * as FaIcons from "react-icons/fa6";

import productData from "@data/products.json";
import { Chip } from "@mui/material";

function ProductCard() {
    return (
        <div className="app-main-page">
            <div className="app-card-page">
                {productData.map((data) => (
                    <Card
                        sx={{ minWidth: 400, maxWidth: 400, m: 2 }}
                        key={data.id}
                    >
                        <CardHeader
                            avatar={
                                <Chip
                                    sx={{ bgcolor: green[500], height: 40 }}
                                    label={`${data.totalAvailableQuantity} KG`}
                                ></Chip>
                            }
                            title={data.category}
                            subheader={data.productName}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={`${process.env.PUBLIC_URL}/${data.productImage}`}
                        />
                        <CardContent>
                            <Typography
                                variant="body2"
                                sx={{ color: "text.primary" }}
                                align="left"
                            >
                                Lokasi: {data.location}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FaIcons.FaHeart size="1em" />
                            </IconButton>
                            <IconButton aria-label="share">
                                <FaIcons.FaShare size="1em" />
                            </IconButton>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ProductCard;
