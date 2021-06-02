const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');
const imageminGifsicle = require('imagemin-gifsicle');

const optimizeImages = (originalBuffer, absoluteFrom) => {
    if (!absoluteFrom.match(/\.(jpe?g|png|gif|svg)$/) || process.env.NODE_ENV !== 'production') {
        return originalBuffer;
    }

    return new Promise((resolve) => {
        imagemin
            .buffer(originalBuffer, {
                plugins: [
                    imageminJpegtran(),
                    imageminPngquant({
                        quality: [0.6, 0.8],
                    }),
                    imageminSvgo(),
                    imageminGifsicle(),
                ],
            })
            .then((buffer) => {
                if (originalBuffer.length < buffer.length) {
                    return resolve(originalBuffer);
                }

                return resolve(buffer);
            })
            .catch(() => resolve(originalBuffer));
    });
};

module.exports = { optimizeImages };
