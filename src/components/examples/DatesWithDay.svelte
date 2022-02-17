<script>
  import dayjs from 'dayjs';
</script>

<markup>
  <code>
    // parse<br />
    {dayjs('1999-12-31', 'YYYY-MM-DD').toString()}<br />
    <br />
    // display<br />
    {dayjs().format('DD MMMM YYYY')}<br />
    <br />
    // manipulate<br />
    {dayjs().subtract(1, 'year').add(1, 'day').toString()}<br />
  </code>
</markup>
