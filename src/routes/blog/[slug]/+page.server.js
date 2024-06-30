//only rendered on server side
export async function load({params}){
    return {
        content: `hello ${params.slug}`
    }
    }

    //same function, but async will be used
    //safer