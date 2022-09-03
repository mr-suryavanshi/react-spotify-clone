const getFirstSongName = (str) => {
 return str && str.substring(0, str.indexOf("("));
}


export {getFirstSongName}

