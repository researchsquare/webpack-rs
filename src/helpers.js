import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminGifsicle from 'imagemin-gifsicle';

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

export default { optimizeImages };
