<!doctype html>
<html>
    <h3>Vulnerabel input</h3>
    <form>
        <input name="field" type="text"/>
        <input type="submit"/>
        <h4>Result:<?= $_GET['field']?></h4>
    </form>
</html>