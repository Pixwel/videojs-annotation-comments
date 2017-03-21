var ControlsTemplate = `
	{{#unless adding}}
	  	<div class="vac-controls vac-control">
		  	Annotations
			<button>+ NEW</button>
			<div class="nav">
				<div class="prev">Prev</div>
				<div class="next">Next</div>
			</div>
		</div>
	{{/unless}}

	{{#if adding}}
		<div class="vac-video-cover vac-control">
			<div class="vac-video-cover-canvas"></div>
		</div>

		<div class="vac-add-controls vac-control">
		  	New Annotation
			<i>Select shape + range</i>
			<button>CONTINUE</button>
			<a>cancel</a>
		</div>



	{{/if}}
`;

module.exports = {ControlsTemplate};
