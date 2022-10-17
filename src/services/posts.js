

export function getPostDetail(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
        console.log('data: ', data);
        if(Object.keys(data).length === 0){
            const sessionPost = getSessionStoragePosts();
            const postFound = sessionPost.find( (item) => item.id === id);
            if(postFound) return postFound;
            else throw new Error("Post Not Found");
        }
        return data;
    })
    .catch((error) =>{
        console.log('error: ', error);
        throw new Error("Post Not Found");
    });
}

export function getAllPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        const sessionPost = getSessionStoragePosts()
        const postList = [...posts, ...sessionPost];
        let sortedPost = postList.sort((a, b) => {
          return (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0;
      });
        const deletedIds = getDeletedIds();
        console.log(sortedPost);
        return sortedPost.filter( item => !deletedIds.includes(item.id));
      });
}

export function getSessionStoragePosts() {
    const sessionPost = JSON.parse(sessionStorage.getItem("posts") || "[]");
        console.log('sessionPost: ', sessionPost);
        return sessionPost;
}

// save on session storage the deleted post
export function setDeletedPost(id) {
    const ids = getDeletedIds();
    const saveIds = [...ids, id].join(',');
    sessionStorage.setItem("deleted", saveIds);
}

export function getDeletedIds() {
    const data = sessionStorage.getItem("deleted");
    if(data) return sessionStorage.getItem("deleted").split(',');
    else return [];
}

export function deletePostById(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    }).then((data)=> {
        setDeletedPost(id);
        console.log("delete=>", data)
    });
}

export function getComments(postId){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then((json) => console.log(json));

}