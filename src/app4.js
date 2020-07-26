import './app4.css'
import $ from 'jquery'

const $circle = $('.circle');
$circle.on('mouseenter', () => {
    $circle.addClass('actions').on('mouseleave', () => {
        $circle.removeClass('actions')
    })
});