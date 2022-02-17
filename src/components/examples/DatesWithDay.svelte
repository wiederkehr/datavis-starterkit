<script>
  import dayjs from 'dayjs';
</script>

<markup>
  <code>
    // parse<br />
    {dayjs('31.12.1999', 'DD.MM.YYYY').toString()}<br />
    <br />
    // display<br />
    {dayjs().format('DD MMMM YYYY')}<br />
    <br />
    // manipulate<br />
    {dayjs().subtract(1, 'year').add(1, 'day').toString()}<br />
  </code>
</markup>
