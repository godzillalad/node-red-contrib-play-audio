module.exports = function(RED) {
	function  PlayAudioNode(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		this.on('input', function(msg) {
			console.log("publish playaudio msg");
			RED.comms.publish("playaudio", msg.payload);
		});
	}
	RED.nodes.registerType("play audio", PlayAudioNode);
}

