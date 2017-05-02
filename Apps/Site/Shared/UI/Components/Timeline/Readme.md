Basic:

    var reactlook = require('react-look');
    var AppWrapper = reactlook.LookRoot;
    var AppConfig = reactlook.Presets['react-dom'];
    <AppWrapper config={AppConfig}>
        <Timeline />
    </AppWrapper>