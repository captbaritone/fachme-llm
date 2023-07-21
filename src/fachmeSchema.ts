/**
 * Given a list of operatic roles that suite a singer well, responds with a list
 * of 10 roles that would also be well suited to that singer's voice.
 * 
 * Must not include any roles from the original list.
 * Must not include any duplicate roles.
 */
export type FachMeResponse = {
    suggestions: Array<SuggestedRole>
}

type SuggestedRole = {
    /* The name of the character in the opera */
    name: string;
    /* The title opera in which the character appears */
    opera_title: string;
    /* The full name of the composer of the opera */
    composer_name: string;
}