

$('#fetchbtn').click(function()
{
    $.get('https://api.codingninjas.in/api/v3/courses',function(data)
    {
        // console.log(data.data.courses);

        for(let course of data.data.courses)
        {
            console.log(course);
            const code = `<div class="card" style="width: 18rem;">
            <img src="${course.classroom_icon_url
            }" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 id="coursename">${course.title}</h4>
                <h6 id="coursecategory">${course.level}</h6>
            </div>
          </div>`
          $('#courselist').append(code);
        }
    })
})