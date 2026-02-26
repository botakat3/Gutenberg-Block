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
import {MediaUpload, MediaUploadCheck, RichText, PlainText, useBlockProps} from '@wordpress/block-editor';
import { SelectControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import StarRating from "../../components/StarRating/StarRating";
import BlockSettings from "./BlockSettings";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	let divStyle = {
		// css property : value
		// css property is camelCased
		borderColor: attributes.borderColor,
		color: attributes.textColor,
	}

	return (
		<div { ...useBlockProps({className: attributes.backgroundColorClass, style: divStyle}) }>

			<BlockSettings attributes={attributes} setAttributes={setAttributes} />

			{/*<SelectControl*/}
			{/*	label="Select a rating"*/}
			{/*	value={attributes.stars}*/}
			{/*	onChange={stars => setAttributes({stars: parseInt(stars)})}*/}
			{/*	options={[*/}
			{/*		{value:1, label:'*'},*/}
			{/*		{value:2, label:'**'},*/}
			{/*		{value:3, label:'***'},*/}
			{/*		{value:4, label:'****'},*/}
			{/*		{value:5, label:'*****'},*/}
			{/*	]}*/}
			{/*/>*/}

			<StarRating
				rating={attributes.stars}
				setRating={stars => setAttributes({stars})}/>

			<RichText className="quote"
					  placeholder="Start typing here.."
					  tagName="div"
					  value={attributes.quote}
					  onChange={quote => setAttributes({quote})}
					  allowFormats={['core/bold', 'core/italic']}

			/>

			<div className="quote-profile">
				<div className="photo">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({imgUrl: media.sizes.thumbnail.url})
							}
							allowedTypes={'image'}
							render={({open}) => (
								<img src={attributes.imgUrl} onClick={open} alt="Upload media"/>
							)}
						/>
					</MediaUploadCheck>
				</div>

				<div className="text">
					<PlainText className="author"
							   placeholder="Eric Foreman"
							   value={attributes.author}
							   onChange={author => setAttributes({author})}
					/>
					<PlainText className="location"
							   placeholder="Location Placeholder"
							   value={attributes.location}
							   onChange={location => setAttributes({location})}
					/>
				</div>
			</div>
		</div>
	);
}
