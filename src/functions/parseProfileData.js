/**
 * OPSTID Profile Data Parser
 * 
 * Profile Data is like:
 * tw=opstid&ig=opstid&...
 */

const parseProfileData = (profileData) => {
    const searchParams = new URLSearchParams(profileData)
    let accounts = [] // accounts in the profile
    let tags = [];
    let name = "Anonymous" // name of the author of the profile
    searchParams.forEach((value,key) => {
        // value of key "_n" becomes name
        if(key === "_n") name = value;
        // value of key "_t" becomes tags
        else if(key === "_t"){
            tags = value.split(";;")
        }
        // else, becomes an account
        else{
            accounts.push({
                service: key,
                account: value
            });
        }
    });

    return {name, tags, accounts}
}
export default parseProfileData