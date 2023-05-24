import React from "react";
import styles from './Image.module.css'

function ImageComponent() {
    return (
        <div className={styles.container}>
            <img src="https://burst.shopifycdn.com/photos/red-fox-sits-in-green-grassy-field.jpg?width=925&format=pjpg&exif=1&iptc=1" />
        </div>
    )
}

export default ImageComponent;