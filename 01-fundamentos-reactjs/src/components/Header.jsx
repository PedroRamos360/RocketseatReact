import styles from "./Header.module.css";

import logo from "../assets/ignite-logo.svg";

export function Header() {
	return (
		<header className={styles.header}>
			<img src={logo} alt="Ignite" />
			<strong>Ignite Feed</strong>
		</header>
	);
}
