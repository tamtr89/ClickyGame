import React from "react";

const styles = {
    container: {
        paddingLeft: 100,
        paddingRight: 100,
        width: 1100
        
    }
}
const Container = props =>
<div style={styles.container}>
    {props.children}
</div>

export default Container;