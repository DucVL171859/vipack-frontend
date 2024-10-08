import { FormControl, Grid, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const Filter = () => {
    const [filter, setFilter] = useState("new-arrivals");

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Grid item xs={12} sm={12}
            sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, marginTop: { xs: 2, sm: 0 } }}
        >
            <FormControl fullWidth sx={{ width: '50%' }}>
                <Select
                    value={filter}
                    onChange={handleChange}
                    displayEmpty
                >
                    <MenuItem value="" disabled>Select a filter</MenuItem>
                    <MenuItem value="hot-sales">Sản phẩm nổi bật</MenuItem>
                    <MenuItem value="new-arrivals">Sản phẩm mới nhất</MenuItem>
                    <MenuItem value="price-ascending">Theo giá tăng dần</MenuItem>
                    <MenuItem value="price-descending">Theo giá giảm dần</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    );
}

export default Filter;