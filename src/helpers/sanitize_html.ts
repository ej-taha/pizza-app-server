import sanitize from 'sanitize-html';
import Debug from 'debug';

export const sanitizeHtml = (dirtyHtml: any) => {
   const debug = Debug(`debug:sanitize-Html`);
   const cleanHtml = sanitize(dirtyHtml, {
      allowedTags: ['h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'ul', 'ol',
         'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'abbr', 'code', 'hr', 'br', 'div',
         'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'span'],
      disallowedTagsMode: 'discard',
      allowedAttributes: {

      },
   });

   debug('sanitized HTML', cleanHtml);

   return cleanHtml;
};