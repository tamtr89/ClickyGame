import React from "react";

const styles = {
    footer: {
        padding : 10,
        textAlign: "right",
        textTransform: "uppercase",
        fontWeight: 700
    }
}

function Footer(props) {
    return(
        <footer className="navbar-fixed-bottom">
            <div style={styles.footer}>
                <p>{props.footer}<a href="https://github.com/tamtr89/Tran.Portfolio"><i class="fab fa-connectdevelop"></i></a></p> 
            </div>
        </footer>
)
}
export default Footer;