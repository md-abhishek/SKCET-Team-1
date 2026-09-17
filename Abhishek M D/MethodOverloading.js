function sample() 
{
    if (arguments.length === 1) 
    {
        console.log(arguments[0]);
    }
    else if (arguments.length === 2) 
    {
        console.log(arguments[0], arguments[1]);
    }
}

sample("One");          
sample("One","Two");   
