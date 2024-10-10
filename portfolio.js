
const Elements = new Array(document.getElementById('element1'), document.getElementById('element2'), document.getElementById('element3'), document.getElementById('element4'));

function General()
{
    for (var i = 0; i < 4; i++)
    {
        Elements[i].classList.replace('active', 'hide');
    }
    Elements[0].classList.toggle('active');
}
function Achievements()
{
    for (var i = 0; i < 4; i++)
    {
        Elements[i].classList.replace('active', 'hide');
    }
    Elements[1].classList.toggle('active');
}
function Plans()
{
    for (var i = 0; i < 4; i++)
    {
        Elements[i].classList.replace('active', 'hide');
    }
    Elements[2].classList.toggle('active');
}
function Adventures()
{
    for (var i = 0; i < 4; i++)
    {
        Elements[i].classList.replace('active', 'hide');
    }
    Elements[3].classList.toggle('active');
}