export function Post({ author, content }) {
	return (
		<div className="post">
			<div className="post-header">
				<div className="post-author">
					<strong>{author}</strong>
				</div>
			</div>
			<p className="post-content">{content}</p>
		</div>
	);
}
