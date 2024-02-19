import {ChevronLeft} from "lucide-react";
import React from "react";
import styles from "./styles.module.scss";

const  BackButton= () => {
	return (
		<button
			className={`${styles.button}`}
		><ChevronLeft/>
		</button>
	)
}
export default BackButton