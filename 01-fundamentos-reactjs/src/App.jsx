import React from "react";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import { Post } from "./components/Post";

function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<aside></aside>
				<main>
					<Post author="Diego Fernandes" content="Lorem ipsum dolor sit amem" />
					<Post author="Pedro Ramos" content="Lorem ipsum dolor sit amem" />
				</main>
			</div>
		</div>
	);
}

export default App;
