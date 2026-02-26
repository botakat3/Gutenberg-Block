/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {MediaUpload, MediaUploadCheck, RichText, PlainText, useBlockProps, URLInput,} from '@wordpress/block-editor';
import {Button, SelectControl} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	return (
		<div {...useBlockProps() }>

			<PlainText className="project"
					   placeholder="Project Name Placeholder"
					   value={attributes.project}
					   onChange={project => setAttributes({project})}
			/>

			<div className="leftside">
				<div className="photo">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({imageUrl: media.sizes.large.url})
							}
							allowedTypes={['image']}
							render={({open}) => (
								<img
									src={attributes.imageUrl}
									onClick={() => open()}
									alt="Upload media"
								/>							)}
						/>
					</MediaUploadCheck>
				</div>

				<div className="project-link">
					<p>Project Link</p>
					<URLInput
						value={attributes.buttonUrl}
						onChange={(buttonUrl) => setAttributes({buttonUrl})}
						placeholder="URL to project"
					/>

				</div>
			</div>


	<div className="rightside">
		<div className="text">
			<h2>Overview</h2>
			<RichText className="overview"
					  placeholder="Start typing description here..."
					  tagName="div"
					  value={attributes.overview}
					  onChange={overview => setAttributes({overview})}
					  allowFormats={['core/bold', 'core/italic']}

			/>

		</div>
	</div>
</div>
);
}
