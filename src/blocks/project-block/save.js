/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {PlainText, RichText, useBlockProps} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {

	return (
		<div {...useBlockProps.save()}>
			<h1 className="project">{ attributes.project }</h1>

			<div className="leftside">
				<div className="photo">
					<img src={attributes.imageUrl} alt={"Photo of " + attributes.project}/>
				</div>

				{ attributes.buttonUrl ? (
					<a
						className="button wp-element-button"
						href={ attributes.buttonUrl }
						target="_blank"
					>
						Checkout { attributes.project }
					</a>
				) : null}
			</div>

			<div className="rightside">
				<h2>Overview</h2>
				<p className="overview">{ attributes.overview }</p>
			</div>
		</div>);
}
